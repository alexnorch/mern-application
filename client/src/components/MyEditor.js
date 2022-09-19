import { Editor } from "draft-js";
import "./MyEditor.css";

const MyEditor = ({
  editorState,
  handleKeyCommand,
  mapKeyToEditorCommand,
  toggleBlockType,
  toggleInlineStyle,
  getBlockStyle,
  inlineStyles,
  blockTypes,
  setEditorState
}) => {
  let className = "RichEditor-editor";
  const contentState = editorState.getCurrentContent();

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += " RichEditor-hidePlaceholder";
    }
  }

  const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    return (
      <div className="RichEditor-controls">
        {inlineStyles.map((type) => (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
  };

  const BlockStyleControls = ({ editorState, onToggle }) => {
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div className="RichEditor-controls">
        {blockTypes.map((type) => (
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
  };

  const StyleButton = (props) => {
    let className = "RichEditor-styleButton";

    if (props.active) {
      className += " RichEditor-activeButton";
    }

    const onToggle = (e) => {
      e.preventDefault();
      props.onToggle(props.style);
    };

    return (
      <span className={className} onMouseDown={onToggle}>
        {props.label}
      </span>
    );
  };

  return (
    <div className="RichEditor-root">
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className}>
        <Editor
          blockStyleFn={getBlockStyle}
          // customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={setEditorState}
          spellCheck={true}
        />
      </div>
    </div>
  );
};

export default MyEditor;
