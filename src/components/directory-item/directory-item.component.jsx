import { useNavigate } from 'react-router-dom';
import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
const {title, imageUrl, route} = category;
const nagivate = useNavigate();

const navigateHandler = () => nagivate(route);

return(
    <DirectoryItemContainer onClick={navigateHandler}>
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </Body>
    </DirectoryItemContainer>
)
}

export default DirectoryItem;