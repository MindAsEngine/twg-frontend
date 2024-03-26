import { WithContext as ReactTags } from 'react-tag-input';

export default function EditorTagsList({ value, setValue, suggestions }) {
    const handleAddition = currtag => {
        //if (setSuggestionsList.find((tag) => tag.id === currtag.id)) {
            setValue([...value, currtag]);
        //}
    }
    const handleDelete = i => {
        setValue(value.filter((tag, index) => index !== i));
    }
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = value.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setValue(newTags);
    }
    return (
        <ReactTags
            tags={value}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            handleDrag={handleDrag}
            suggestions={suggestions}
            inputFieldPosition="inline"
            placeholder=""
            autocomplete
            autofocus={false}
        />
    )
}