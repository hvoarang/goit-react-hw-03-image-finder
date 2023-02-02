import styled from '@emotion/styled';

export const LoadMore = styled.button`
	padding: 16px 32px;
	border-radius: 8px;
	font-size: 18px;
	border: none;
	cursor: pointer;
	transition: 300ms transform ease-in-out;
	background-color: rgb(94, 239, 255);
	:hover,
	:focus {
		transform: scale(1.08);
		border: none;
		outline: none;
	}

	background-color: rgba(94, 239, 255, 0.5);
`;
