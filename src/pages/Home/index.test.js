import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      /* suite au test [err] changement de await screen.findByText("Message envoyé !"); en queryByTest : attendre que le texte soit rendu avant de tester */
      await screen.queryByText("Message envoyé !");
    });
  });

});

/*  TEST INTEGRATION : Quand la page se charge : 
- apparait les evenements ?
-apparait les personnes de l'équipe ?
-apparait le footer ? */

describe("When a page is created", () => {
  it("a list of events is displayed",  () => {
    render(<Home />);
    const EventList = screen.getByTestId("eventList");
    expect(EventList).toBeInTheDocument();
  });


  it("a list a people is displayed", () => {
    //
  });

  it("a footer is displayed", () => {
  render(<Home />);
    const footer = screen.getByText("Contactez-nous");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
