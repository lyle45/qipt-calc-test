import { redirect } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return await import(`@/app/assets/companies-metadata/${params.id}.json`);
}

export default async function Home() {
  redirect('/test-co');
  return <></>;
}
