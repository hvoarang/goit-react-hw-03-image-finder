import styled from '@emotion/styled';

export const GalleryItem = styled.li`
	border-radius: 2px;
	border: 0.5px solid black;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const GalleryImage = styled.img`
	display: block;
	transition: 250ms transform ease-in-out;
	:hover {
		transform: scale(1.05);
		cursor: zoom-in;
	}
`;
