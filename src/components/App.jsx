import ImageGalery from './ImageGalery/ImageGalery';
// import ImageGaleryItem from './ImageGaleryItem/ImageGaleryItem';
import Serchbar from './Searchbar/Serchbar';

export const App = () => {
  return (
    <div>
      <Serchbar />
      <ImageGalery />
      {/* <ImageGaleryItem /> */}
    </div>
  );
};
