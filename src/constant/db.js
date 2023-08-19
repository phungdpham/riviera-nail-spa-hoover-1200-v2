import Google from '../images/icon/gg.png';
import Facebook from '../images/icon/fb.png';
import Instagram from '../images/icon/ig.png';

export default {
  salonName: 'Riviera Nails & Spa',
  phone: '(205) 985-1200',
  address: {
    street: '5180 Medford Dr #104,',
    city: 'Hoover',
    state: 'AL 35244',
    directionLink: 'https://goo.gl/maps/Mtqk8MfsGUT2hGs36',
  },
  hours: [
    { dates: 'mon - sat', time: '9:00am - 7:00pm' },
    // {dates: "saturday", time: "9:30am - 7:30pm"},
    { dates: 'sunday', time: '12:00pm - 6:00pm' },
  ],
  booking: '',
  map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26660.385402766802!2d-86.854853!3d33.356752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888921a9979e2dbb%3A0x3df1e6ec63adc19d!2sRiviera%20Nails%20%26%20Spa!5e0!3m2!1sen!2sus!4v1692436387005!5m2!1sen!2sus',
  banner: {
    bannerTitle: 'Welcome to Riviera Nails & Spa',
    bannerContent: 'We Bring Cleanliness, Freshness & Delights for Extraordinary Spa Experience',
  },
  values: [
    {
      title: 'We have the best therapies',
      content:
        'Riviera Nails & Spa promotes comfort, beauty, well-being, and health',
    },
    {
      title: 'Our Customers are happy',
      content:
        'We use ONLY the most trusted brands in the beauty industry. Our world-class products, services, and top technologies.',
    },
    {
      title: 'Highly qualified staff',
      content:
        ' Our staff was trained to follow a proper sanitization protocol that puts our customer’s cleanliness as the number one priority.',
    },
  ],
  facebook: {
    name: 'facebook.com/rivieranailspa.hoover',
    messenger: 'https://m.me/rivieranailspa.hoover',
  },
  social: [
    {
      name: '',
      icon: Facebook,
      link: 'https://www.facebook.com/',
    },
    {
      name: '',
      icon: Instagram,
      link: 'https://www.instagram.com/',
    },
    { name: '', icon: Google, link: 'https://goo.gl/maps/fh9htTEQfVYvL72X7' },
  ],
  about: [
    {
      id: '1',
      content:'We built our spa salon by going above and beyond for each and everyone of our clients'
    },
    {
      id: '2',
      content: 'We are committed to help you capture the tranquility of serenity and dedicated to the enhancement of your natural beauty. We are working everyday to better meet your needs and see real beauty from your perspective.'
    },
    {
      id: '3',
      content: 'We offer a service that is different from others be the salon to provide 100% sanitary service. We committed to bring real Cleanliness, freshness and delights for extraordinary spa experience.'

    },
  ],
};
