import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function NotFound() {
  return (
    <div className="bg-white rounded-lg min-h-[300px] p-6 flex items-center justify-center text-xl gap-4">
      <ExclamationCircleOutlined className="text-red-500" />
      <div>페이지를 찾을 수 없습니다.</div>
    </div>
  );
}
