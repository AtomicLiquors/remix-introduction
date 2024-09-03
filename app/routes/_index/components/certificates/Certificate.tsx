
import TLItemTitle from "@/common/timeline/atoms/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/TLItemTime";
import { CertificateProps } from "./certificateType";
import { FAType, FONT_AWESOME_TYPES, TCType } from "@/common/icon/FontAwesome";

interface CertificateComponentProps extends CertificateProps{
  icon: FAType;
  color: TCType;
}

const Certificate: React.FC<CertificateComponentProps> = (cert) => {
  return (
    <>
      <TLItemTitle title={`${cert.alias ? `${cert.alias}: ` :''}${cert.name} ${cert.rank ? `(${cert.rank})` : ''}`} icon={cert.icon}  color={cert.color}/>
      <TLItemCaption>
        {cert.date.toLocaleDateString("ko-KR")} {cert.authority}
      </TLItemCaption>
    </>
  );
};

export default Certificate;
