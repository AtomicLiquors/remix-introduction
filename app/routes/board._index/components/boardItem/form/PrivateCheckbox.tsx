interface BoardPrivateCheckboxProps {
  isPrivateChecked: boolean;
  setIsPrivateChecked: (e: boolean) => void;
}

export default function BoardPrivateCheckbox({
  isPrivateChecked,
  setIsPrivateChecked,
}: BoardPrivateCheckboxProps) {
  return (
    <label className="text-sm text-gray-700">
      <input
        type="checkbox"
        name="is_private"
        checked={isPrivateChecked}
        onChange={(e) => setIsPrivateChecked(e.target.checked)}
      />
      &nbsp;
      비공개로 게시하기
    </label>
  );
}
