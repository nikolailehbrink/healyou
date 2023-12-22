import Markdown from "react-markdown";

type Props = { content: string };
export default function AssistantMessage({ content }: Props) {
  return (
    <div className="prose prose-h2:text-xl prose-neutral prose-li:marker:text-neutral-800 mr-12 rounded-2xl bg-primary p-6 text-background">
      <Markdown>{content}</Markdown>
    </div>
  );
}
