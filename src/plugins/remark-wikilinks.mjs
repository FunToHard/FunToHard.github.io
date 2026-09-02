/**
 * Remark Plugin: Automatic Wikipedia Links for [[terms]]
 * 
 * Supports:
 * - [[Term]]: Links to https://en.wikipedia.org/wiki/Term with text "Term"
 * - [[Target Term|Display Text]]: Links to https://en.wikipedia.org/wiki/Target_Term with text "Display Text"
 */
export function remarkWikilinks() {
  return (tree) => {
    function visitor(node, index, parent) {
      if (!node) return;

      // Skip code blocks, inline code, existing links, and KaTeX math blocks
      if (
        node.type === 'code' ||
        node.type === 'inlineCode' ||
        node.type === 'link' ||
        node.type === 'math' ||
        node.type === 'inlineMath'
      ) {
        return;
      }

      if (node.type === 'text' && parent && Array.isArray(parent.children) && typeof index === 'number') {
        const text = node.value;
        const regex = /\[\[(.*?)\]\]/g;
        if (!regex.test(text)) return;

        regex.lastIndex = 0;
        const newNodes = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
          const matchStart = match.index;
          const matchEnd = regex.lastIndex;
          const rawContent = match[1].trim();

          // Push any preceding plain text
          if (matchStart > lastIndex) {
            newNodes.push({
              type: 'text',
              value: text.slice(lastIndex, matchStart),
            });
          }

          // Parse [[target|display]] or [[target]]
          let target = rawContent;
          let display = rawContent;

          if (rawContent.includes('|')) {
            const parts = rawContent.split('|');
            target = parts[0].trim();
            display = parts.slice(1).join('|').trim() || target;
          }

          // Generate canonical Wikipedia URL
          const formattedTarget = target.charAt(0).toUpperCase() + target.slice(1);
          const wikiSlug = encodeURIComponent(formattedTarget.replace(/\s+/g, '_'));
          const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSlug}`;

          newNodes.push({
            type: 'link',
            url: wikiUrl,
            title: `Wikipedia: ${target}`,
            data: {
              hProperties: {
                class: 'wiki-term-link',
                target: '_blank',
                rel: 'noopener noreferrer',
                'data-wiki-term': target,
              },
            },
            children: [
              {
                type: 'text',
                value: display,
              },
            ],
          });

          lastIndex = matchEnd;
        }

        // Push trailing text
        if (lastIndex < text.length) {
          newNodes.push({
            type: 'text',
            value: text.slice(lastIndex),
          });
        }

        // Replace the text node with the array of parsed nodes
        parent.children.splice(index, 1, ...newNodes);
        return index + newNodes.length;
      }

      if (node.children && Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          const result = visitor(node.children[i], i, node);
          if (typeof result === 'number') {
            i = result - 1;
          }
        }
      }
    }

    visitor(tree, null, null);
  };
}
