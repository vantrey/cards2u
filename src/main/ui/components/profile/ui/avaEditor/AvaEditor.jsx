import React from 'react';
import AvatarEditor from "react-avatar-editor"
import styles from '../profileAvatar/ProfileAvatar.module.css';


class AvaEditor extends React.Component {

	onClickSave = () => {
		if ( this.editor ) {
			const canvasScaled = this.editor.getImageScaledToCanvas ()
			const newAvatarScaled = canvasScaled.toDataURL () // canvas to base64
			this.props.updateAvatar (newAvatarScaled)
		}
	}

	setEditorRef = (editor) => this.editor = editor

	render () {
		return (
			<div  className={styles.editor__canvasblock}>
				<div  className={styles.canvasblock}>
				<AvatarEditor
					ref={this.setEditorRef}
					image={this.props.newAvatar}
					width={250}
					height={250}
					border={150}
					scale={1}
					color={[255, 255, 255, 0.6]}
				/>
				</div>
				<div  className={styles.canvasblock__buttons}>
				<button className={styles.button__apply} onClick={this.onClickSave}>apply</button>
				<button className={styles.button__cansel} onClick={this.props.cancelAvaEditor}>cancel</button>
				</div>
			</div>
		)
	}
}

export default AvaEditor;