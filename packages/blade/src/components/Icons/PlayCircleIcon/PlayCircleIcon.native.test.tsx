import PlayCircleIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<PlayCircleIcon />', () => {
  it('should render PlayCircleIcon', () => {
    const renderTree = renderWithTheme(
      <PlayCircleIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
