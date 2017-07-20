/*******************************************************************************
_____ _   __  ___  ______  _____           ___  ____   _ _____
|_   _| | / / / _ \ | ___ \|  _  |          |  \/  | | | |_   _|
  | | | |/ / / /_\ \| |_/ /| | | |  ______  | .  . | | | | | |
  | | |    \ |  _  || ___ \| | | | |______| | |\/| | | | | | |
 _| |_| |\  \| | | || |_/ /\ \_/ /          | |  | | |_| |_| |_
 \___/\_| \_/\_| |_/\____/  \___/           \_|  |_/\___/ \___/

*******************************************************************************/

/*******************************************************************************
* Custom HTML Tags Components
*******************************************************************************/
export A from "./A";
export Button from "./Button";
export H1 from "./H1";
export H2 from "./H2";
export H3 from "./H3";
export Img from './Img';

/*******************************************************************************
* Custom High Level Components
*******************************************************************************/
export CenteredSection from "./CenteredSection";
export ContainerLayout from "./ContainerLayout";
export Footer from "./Footer";
export Header from "./Header";
export Icon from './Icon';
export List from './List';
export ListItem from './ListItem';
export LoadingIndicator from './LoadingIndicator';
export Menu from './Menu';
export ProgressBar from './ProgressBar';
export Section from './Section';
export Toggle from './Toggle';
export ToggleOption from './ToggleOption';

/*******************************************************************************
* Styled Components API
*******************************************************************************/
// @todo we must decide whether users will be able to extends the components we provide with its own ones or to force users to just use the components we expose
// A ) Rigid + higher control ? -> do not export keyframes and styles
// B ) Flexible + lower control ? -> export keyframes and styled
export { injectGlobal, keyframes, styled, ThemeProvider} from 'styled-components';
