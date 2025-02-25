import { FAType, TCType } from "@/components/common/icon/FontAwesome";
import TLItemCaption from "../timeline/atoms/TLItemTime";
import TLItemTitle from "../timeline/atoms/TLItemTitle";
import { CertificateProps } from "./certificateType";

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
