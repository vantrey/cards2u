import React from 'react';
import AvatarEditor from "react-avatar-editor"


class AvaEditor extends React.Component {

	onClickSave = () => {
		if (this.editor) {
			const canvasScaled = this.editor.getImageScaledToCanvas()
			const newAvatarScaled = canvasScaled.toDataURL() // canvas to base64
			this.props.updateAvatar(newAvatarScaled)
		}
	}

	setEditorRef = (editor) => this.editor = editor

	render () {
		return (<div>
				<AvatarEditor
					ref={this.setEditorRef}
					image={this.props.newAvatar}
					width={100}
					height={100}
					border={50}
					scale={1.2}
				/>
				<button onClick={this.onClickSave}>apply</button>
				<button onClick={this.props.cancelAvaEditor}>cancel</button>
		</div>
		)
	}
}
export default AvaEditor;