import CarouselSlide from './CarouselSlide';
import Short from './Short';
import ShortCards from './ShortCards';
import News from './News';
import ContactForm from './ContactForm';

const Home = () => {

    return (
        <>
            <CarouselSlide />
            <ShortCards/>
            <Short/>
            <News/>
            <ContactForm/>
        </>
    );
}

export default Home;