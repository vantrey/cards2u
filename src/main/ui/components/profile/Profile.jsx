import React from 'react';

import AvatarEditor from "react-avatar-editor"


class MyEditor extends React.Component {

	editor =  AvatarEditor;

	onClickSave = () => {
		if (this.editor) {
			// This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
			// drawn on another canvas, or added to the DOM.
			const canvas = this.editor.getImage()

			// If you want the image resized to the canvas size (also a HTMLCanvasElement)
			const canvasScaled = this.editor.getImageScaledToCanvas()
		}
	}

	setEditorRef = (editor) => this.editor = editor

	render () {

		return (<div>
				<AvatarEditor
					ref={this.setEditorRef}
					image="https://bootdey.com/img/Content/avatar/avatar1.png"
					width={100}
					height={100}
					border={50}
					scale={1.2}
				/>
				<hr/>

		</div>
		)
	}
}
export default MyEditor;