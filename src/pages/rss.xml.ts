import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const research = await getCollection('research', ({ data }) => !data.draft);
  const thoughts = await getCollection('thoughts', ({ data }) => !data.draft);

  const researchItems = research.map((item) => ({
    title: `[Research] ${item.data.title}`,
    pubDate: item.data.pubDate,
    description: item.data.description,
    link: `/research/${item.slug}/`,
  }));

  const thoughtItems = thoughts.map((item) => ({
    title: `[Thought] ${item.data.title}`,
    pubDate: item.data.pubDate,
    description: item.data.description,
    link: `/thoughts/${item.slug}/`,
  }));

  const allItems = [...researchItems, ...thoughtItems].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
  );

  return rss({
    title: 'funtohard philosophy',
    description: 'Philosophy Research, Epistemology, Symbolic Logic, and Thought Sharing by funtohard.',
    site: context.site,
    items: allItems,
    customData: `<language>en-us</language>`,
  });
}
