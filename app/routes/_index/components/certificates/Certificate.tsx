
import TLItemTitle from "@/common/components/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/components/atoms/timeline/TLItemTime";
import { CertificateProps } from "./certificateType";
import { FAType, FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

interface CertificateComponentProps extends CertificateProps{
  icon: FAType;
}

const Certificate: React.FC<CertificateComponentProps> = (cert) => {
  return (
    <>
      <TLItemTitle title={`${cert.alias ? `${cert.alias}: ` :''}${cert.name} ${cert.rank ? `(${cert.rank})` : ''}`} icon={cert.icon}/>
      <TLItemCaption>
        {cert.date.toLocaleDateString("ko-KR")} {cert.authority}
      </TLItemCaption>
    </>
  );
};

export default Certificate;
