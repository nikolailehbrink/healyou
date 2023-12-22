type Props = {
  content: string;
};
export default function UserMessage({ content }: Props) {
  return (
    <div className="ml-12 flex flex-col self-end rounded-2xl bg-background px-5 py-3">
      {content}
    </div>
  );
}
