import { render, fireEvent, screen } from "@testing-library/react";
import ComponenteBoton from "../components/ComponenteBoton/ComponenteBoton";

    test("El botón se renderiza correctamente", () => {
        render(<ComponenteBoton />)
    })
    test("El botón lanza la función pasada por props", () => {
        const miSpy = jest.fn()
        render(<ComponenteBoton func={miSpy} />)
        const boton = screen.getByRole("button")
        fireEvent.click(boton)

        expect(miSpy).toBeCalledTimes(1)
    })

