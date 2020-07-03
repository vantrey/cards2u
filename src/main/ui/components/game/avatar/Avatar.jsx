import React from 'react'
import AvatarEditor from 'react-avatar-editor'


class Avatar extends React.Component {

	render() {
		return (
			<AvatarEditor
				image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F743868063426312174%2F&psig=AOvVaw1_4oVLAfCiMj6zhmy78OvQ&ust=1593421209225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjX9eGSpOoCFQAAAAAdAAAAABAD'
				width={250}
				height={250}
				border={50}
				color={[255, 255, 255, 0.6]} // RGBA
				scale={1.2}
				rotate={0}
			/>
		)
	}
}

export default Avatar;