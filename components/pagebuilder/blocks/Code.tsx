type CodeBlock = {
  CodeSnippet: {
    code: string;
    _type: string;
  };
};

export default function Code({ ctx }: { ctx: CodeBlock }) {
  return (
    <div className="border border-black-700 dark:bg-black-900 p-4 lg:p-8">
      <pre>
        <code>{ctx.CodeSnippet.code}</code>
      </pre>
    </div>
  );
}
