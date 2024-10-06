import { Form, Input, Modal } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import { TPropsWithModal } from '@repo/core/types';
import { FORM_RULES } from '@repo/core/constants';
import { useCreateTranslationMutation } from '@/queries/translationMutation';
import { TRANSLATIONS_QUERY_KEY } from '@/queries/translationQuery';

export default function CreateServiceModal({ open, onClose }: TPropsWithModal) {
  const [form] = Form.useForm();
  const { mutateAsync } = useCreateTranslationMutation();
  const queryClient = useQueryClient();

  const onSubmit = async (formParams: { serviceName: string; description?: string }) => {
    await mutateAsync(formParams);
    await queryClient.invalidateQueries({ queryKey: TRANSLATIONS_QUERY_KEY });
    onClose?.();
  };

  return (
    <Modal
      title="대상 서비스 등록"
      open={open}
      onCancel={() => onClose?.()}
      onOk={form.submit}
      okText="등록"
      cancelText="닫기"
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="serviceName" label="서비스 이름" rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="서비스 이름을 입력해주세요." />
        </Form.Item>
        <Form.Item name="description" label="설명">
          <Input.TextArea rows={3} placeholder="서비스에 대한 설명을 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
}
