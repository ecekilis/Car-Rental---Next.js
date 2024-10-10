import Card from "@/app/components/Card";
import Container from "../../../components/Container";
import { Car } from "@/app/types";

type ReturnType = {
    message: string;
    data: Car[];
}

const getCars = async (): Promise<ReturnType> => {
    try {
        const res = await fetch("http://localhost:3000/api/vehicles");

        return res.json();
    }
    catch (err) {
        throw new Error("araclari alirken  bir sorun oolustu")
    }

}

const List = async () => {
    const { data } = await getCars();
    console.log(data)
    return (
        <Container >
            <h1 className="font-bold text-xl md:text-3xl mt-10 ">
                Butun araclari kesfet</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
             gap-4 mt-5">
                {
                    data.map((car) => (<div>
                        <h1><Card car={car} />
                        </h1>
                    </div>))
                }
            </div>
        </Container>
    )
}

export default List
