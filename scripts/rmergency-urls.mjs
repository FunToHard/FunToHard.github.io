export const R_MERGENCY_MODULES = [
  {
    lang: 'r',
    name: 'R Language',
    modules: [
      { id: 'mental-model', title: 'Developer Mental Model (R vs Python/C++)' },
      { id: 'core-types', title: 'Core Data Structures & Coercion' },
      { id: 'control-and-apply', title: 'Loops & The Apply Family' },
      { id: 'exam-gotchas', title: 'The University Exam Gotcha Matrix' },
      { id: 'base-wrangling', title: 'Pure Base R Data Wrangling' },
      { id: 'statistics-tests', title: 'Hypothesis Testing & Regression' },
      { id: 'plotting', title: 'Base Graphics for Lab Practicals' },
      { id: 'model-questions', title: 'Top 10 University Exam Questions' },
    ],
  },
  {
    lang: 'mips',
    name: 'MIPS Assembly',
    modules: [
      { id: 'mips-registers-abi', title: 'Patterson-Hennessy Register Map & ABI' },
      { id: 'mips-instruction-formats', title: 'R, I, and J Instruction Encodings' },
      { id: 'mips-memory-alignment', title: 'Memory Alignment & Byte Offset Traps' },
      { id: 'mips-branch-jump-formulas', title: 'Branch vs. Jump Target Address Computation' },
      { id: 'mips-stack-frame-recursion', title: 'Stack Frames & Non-Leaf Procedure Calls' },
      { id: 'mips-pipelining-delay-slots', title: 'Instruction Hazards & Branch Delay Slots' },
      { id: 'mips-exam-model-questions', title: 'High-Yield Assembly Exam Problems' },
    ],
  },
  {
    lang: 'scheme',
    name: 'Scheme & Lisp',
    modules: [
      { id: 'scheme-mental-model', title: 'Prefix S-Expressions & Truthiness Semantics' },
      { id: 'scheme-pairs-lists', title: 'Pairs, Cons Cells & Proper vs. Dotted Lists' },
      { id: 'scheme-quotation-semantics', title: 'Quotation Semantics: Quote, Quasiquote & Unquote' },
      { id: 'scheme-scoping-let', title: 'Scoping Traps: let vs. let* vs. letrec' },
      { id: 'scheme-tail-recursion-tco', title: 'Tail Recursion & Tail Call Optimization (TCO)' },
      { id: 'scheme-higher-order-fold', title: 'Higher-Order Functions: map, filter, fold' },
      { id: 'scheme-exam-practical', title: 'Top University Exam Problems & Model Solutions' },
    ],
  },
  {
    lang: 'prolog',
    name: 'Prolog',
    modules: [
      { id: 'prolog-mental-model', title: 'Facts, Rules & Queries' },
      { id: 'prolog-unification', title: 'Unification vs. Arithmetic Evaluation' },
      { id: 'prolog-lists-recursion', title: 'List Processing & Head-Tail Recursion' },
      { id: 'prolog-cut-negation', title: 'The Cut Operator (!) & Negation as Failure' },
      { id: 'prolog-backtracking', title: 'Backtracking & Search Space Control' },
      { id: 'prolog-exam-qa', title: 'Model University Exam Questions & Answers' },
    ],
  },
  {
    lang: 'fortran',
    name: 'Fortran 77/90',
    modules: [
      { id: 'fortran-mental-model', title: 'Fixed-Format vs. Free-Format Fortran' },
      { id: 'fortran-implicit-typing', title: 'Implicit Typing & IMPLICIT NONE' },
      { id: 'fortran-arrays-memory', title: 'Column-Major Multi-Dimensional Arrays' },
      { id: 'fortran-control-flow', title: 'DO Loops, DO WHILE & Loop Control' },
      { id: 'fortran-subroutines-functions', title: 'Subroutines, Functions & Argument Intent' },
      { id: 'fortran-exam-numerical', title: 'High-Yield Numerical Methods in Fortran' },
    ],
  },
  {
    lang: 'matlab',
    name: 'MATLAB / Octave',
    modules: [
      { id: 'matlab-mental-model', title: '1-Based Matrix Orientation & Semicolon Suppression' },
      { id: 'matlab-array-construction', title: 'Matrix Construction, Slicing & Colon Operator' },
      { id: 'matlab-elementwise-vs-matrix', title: 'Element-wise vs. Linear Algebra Matrix Operations' },
      { id: 'matlab-logical-indexing', title: 'Logical Indexing & Subsetting Masks' },
      { id: 'matlab-functions-scripts', title: 'Functions, Subfunctions & Return Tuples' },
      { id: 'matlab-lab-plotting', title: 'Lab Exam Plotting & Figure Formatting' },
      { id: 'matlab-exam-linear-algebra', title: 'Linear Algebra & ODE Solvers' },
    ],
  },
  {
    lang: 'cobol',
    name: 'COBOL',
    modules: [
      { id: 'cobol-mental-model', title: 'The 4 Mandatory Divisions' },
      { id: 'cobol-column-layout', title: 'Punch-Card Column Rules: Area A vs. Area B' },
      { id: 'cobol-picture-clauses', title: 'PICTURE Clauses: Types & Decimal Scaling' },
      { id: 'cobol-procedure-verbs', title: 'PROCEDURE DIVISION Verbs & Arithmetic' },
      { id: 'cobol-perform-loops', title: 'PERFORM Loops & Structured Programming' },
      { id: 'cobol-exam-files', title: 'Sequential File Processing & Level 88 Conditions' },
    ],
  },
];

export function getRmergencyUrls(baseUrl = 'https://funtohard.github.io') {
  const urls = [`${baseUrl}/r-mergency/`];

  for (const group of R_MERGENCY_MODULES) {
    urls.push(`${baseUrl}/r-mergency/${group.lang}/`);
    urls.push(`${baseUrl}/r-mergency/${group.lang}/drill/`);
    urls.push(`${baseUrl}/r-mergency/${group.lang}/cram/`);

    for (const mod of group.modules) {
      urls.push(`${baseUrl}/r-mergency/${group.lang}/${mod.id}/`);
    }
  }

  return urls;
}
