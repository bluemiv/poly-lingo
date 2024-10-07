import { useNavigate, useParams } from 'react-router-dom';
import { NotFound } from '@repo/ui/components';
import { useTranslationQuery } from '@/queries/translationQuery.ts';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

export default function TranslationDetailPage() {
  const nav = useNavigate();
  const params = useParams();
  const translationId = params.translationId || '';
  const isInvalidId =
    !params.translationId ||
    params.translationId === 'null' ||
    params.translationId === 'undefined';

  const { data: translation } = useTranslationQuery(translationId, {
    enabled: !isInvalidId && !!translationId,
  });
  console.log(translation);

  const onSubmit = () => {};

  if (isInvalidId) return <NotFound />;

  return (
    <div className="p-6">
      <main className="p-6 bg-white rounded-lg">
        <div className="flex gap-2 justify-end">
          <Button onClick={() => nav(-1)}>뒤로가기</Button>
          <Button type="primary" icon={<SendOutlined />} onClick={onSubmit}>
            저장
          </Button>
        </div>
      </main>
    </div>
  );
}
