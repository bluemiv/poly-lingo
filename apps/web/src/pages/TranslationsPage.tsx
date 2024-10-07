import { useTranslationsQuery } from '@/queries/translationQuery';
import { Button, Table } from 'antd';
import { useState } from 'react';
import CreateServiceModal from '@/features/translations/components/CreateServiceModal.tsx';
import { PlusOutlined } from '@ant-design/icons';
import { LinkButton } from '@repo/ui/components';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/router';
import { replaceRoutePath } from '@repo/core/utils';
import { TTranslation } from '@/features/translations/type';

export default function TranslationsPage() {
  const [openCreateServiceModal, setOpenCreateServiceModal] = useState<boolean>(false);
  const nav = useNavigate();

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
          rowKey="_id"
          columns={[
            { title: 'idx', dataIndex: 'idx' },
            {
              title: '서비스 이름',
              dataIndex: 'serviceName',
              render: (name, record: TTranslation) => (
                <LinkButton
                  onClick={() =>
                    nav(
                      replaceRoutePath(ROUTE_PATH.TRANSLATION_DETAIL, {
                        translationId: record._id,
                      }),
                    )
                  }
                >
                  {name}
                </LinkButton>
              ),
            },
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
