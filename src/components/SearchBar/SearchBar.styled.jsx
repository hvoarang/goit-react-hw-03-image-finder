import styled from '@emotion/styled';
import { RiSearchLine } from 'react-icons/ri';

export const Header = styled.header`
	top: 0;
	left: 0;
	position: sticky;
	z-index: 1100;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 64px;
	padding-right: 24px;
	padding-left: 24px;
	padding-top: 12px;
	padding-bottom: 12px;
	color: #fff;
	background-color: rgba(94, 239, 255, 0.5);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
`;

export const SearchFormInput = styled.input`
	display: inline-block;
	width: 100%;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding: 8px 16px;

	::placeholder {
		font: inherit;
		font-size: 18px;
	}
`;
export const SearchFormButton = styled.button`
	display: inline-block;
	width: 48px;
	height: 48px;
	border: none;
	opacity: 0.6;
	background-color: #1da8bf;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	:hover,
	:focus {
		opacity: 1;
		border: none;
	}
`;

export const SearchIcon = styled(RiSearchLine)`
	fill: black;
	transition: 250ms transform ease-in-out;
	width: 32px;
	height: 32px;
	:hover,
	:focus {
		transform: scale(1.2);
	}
`;
