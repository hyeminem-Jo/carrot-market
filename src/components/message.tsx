import { cls } from "../libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

export default function Message({
    message,
    avatarUrl,
    reversed,
  // 내가 보내는 메시지는 오른쪽에 위치하기 때문에 말풍선 순서를 뒤집어야 하므로 reversed 속성 추가
  }: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 mr-2 border border-gray-300 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
}