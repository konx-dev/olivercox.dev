export default function Code({ ctx }: { ctx: any }) {
  return (
    <pre className="p-2">
      <code>{ctx.CodeSnippet.code}</code>
    </pre>
  );
}
