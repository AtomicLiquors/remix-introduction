
import TLItemTitle from "@/common/components/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/components/atoms/timeline/TLItemTime";
import { CertificateProps } from "./certificateType";

const Certificate: React.FC<CertificateProps> = (cert) => {
  return (
    <>
      <TLItemTitle>{cert.alias && `${cert.alias}:`} {cert.name} {cert.rank && `(${(cert.rank)})`}</TLItemTitle>
      <TLItemCaption>
        {cert.date.toLocaleDateString("ko-KR")} {cert.authority}
      </TLItemCaption>
    </>
  );
};

export default Certificate;
