import FormattedText from './formattedText';
import Link from 'next/link';

export interface SecurePropertiesProps {
  title: string;
  link: {
    label: string;
    href: string;
  };
}

export default function SecureProperties({ title, link }: SecurePropertiesProps) {
  return (
    <section>
      <div className="max-w-3xl flex flex-col items-center justify-center gap-10 mx-auto px-6 py-12">
        {title && (
          <FormattedText className="md:text-5xl text-center text-3xl text-white ">
            {title}
          </FormattedText>
        )}
        <div className="flex">
          <Link
            href={link.href}
            className="bg-white px-4 py-3 text-primary-color rounded-sm font-bold capitalize hover:-translate-y-1 border duration-200 hover:bg-transparent hover:text-white hover:scale-95 active:scale-75"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
