import { useTranslationsQuery } from '@/queries/translationQuery';
import { Button, Table } from 'antd';
import { useState } from 'react';
import CreateServiceModal from '@/features/translations/components/CreateServiceModal.tsx';
import { PlusOutlined } from '@ant-design/icons';

export default function TranslationsPage() {
  const [openCreateServiceModal, setOpenCreateServiceModal] = useState<boolean>(false);

  const { data } = useTranslationsQuery();
  const dataSource = data?.results?.map((v, idx) => ({ idx: idx + 1, ...v })) ?? [];
  const count = data?.count || 0;

  return (
    <div className="p-6 w-full h-full">
      <main className="bg-white rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="text-sm">총 {count}개</div>
          <Button
            ghost
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setOpenCreateServiceModal(true)}
          >
            새로 만들기
          </Button>
        </div>
        <Table
          columns={[
            { title: 'idx', dataIndex: 'idx' },
            { title: '서비스 이름', dataIndex: 'serviceName' },
            { title: '설명', dataIndex: 'description' },
          ]}
          dataSource={dataSource}
        />
      </main>
      {openCreateServiceModal && (
        <CreateServiceModal
          open={openCreateServiceModal}
          onClose={() => setOpenCreateServiceModal(false)}
        />
      )}
    </div>
  );
}
