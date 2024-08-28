interface InvalidMsgProps {
    value: string;
}

export default function InvalidMsg({value}: InvalidMsgProps) {
  return (
    <div className="text-xs pl-2">
      {value}
    </div>
  )
}
