interface InvalidFormMsgProps{
    msg: string;
}

export default function InvalidFormMsg({msg}: InvalidFormMsgProps) {
  return (
    <div className="w-full text-sm p-1 bg-red-200">{msg}</div>
  )
}
