import React from 'react';
import styled from 'styled-components';

const ContentCard = styled.div`
    background: #d9d9d9;
    border: 1px solid white;
    width: 100%;
    height: 300px;
    padding: 0px;
    &:hover{
        background-color: #b0b0b0;
    }
`
function Content(props) {
    return (
        <ContentCard>
            {props.children}
        </ContentCard>
    );
}

export default Content;