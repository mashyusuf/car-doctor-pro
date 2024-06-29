
import { getServices } from "@/services/getServices";
import ServicesCard from "../cards/ServicesCard";



const Services = async () => {
    const {services} = await getServices()
  
    
    return (
        <div className="text-slate-800 mb-24 mt-14">
            <div className="text-center container mx-auto mb-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Services</h3>
                <h2 className="text-5xl font-extrabold mb-6">Our Service Area</h2>
                <p className="text-lg text-gray-600">
                    The majority have suffered alteration in some form, by injected
                    humour, or randomised words which do not look even slightly
                    believable.
                </p>
            </div>
           <div className="container mx-auto mt-12 flex flex-wrap justify-center gap-8">
                {services?.map((service) => (
                    <div key={service._id} className="flex justify-center w-full sm:w-auto">
                        <ServicesCard service={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
