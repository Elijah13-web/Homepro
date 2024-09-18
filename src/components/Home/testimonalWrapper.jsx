import Testimonial from "../../components/Home/Testimonials";
import {
  TestimonialDb1,
  TestimonialDb2,
  TestimonialDb3,
} from "../db/index";
import ComponentWrapper from "../../components/reasurable/Wrapper";

const TestimonialWrapper = () => {
  return (
    <ComponentWrapper>
      <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-6">
        Customer Testimonials
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl-gap-8">
        <Testimonial data={TestimonialDb1} />
        <Testimonial data={TestimonialDb2} />
        <Testimonial data={TestimonialDb3} />
      </div>
    </ComponentWrapper>
  );
};

export default TestimonialWrapper; 