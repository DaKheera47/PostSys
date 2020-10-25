const { _ } = Cypress;

describe("Testing Workspace", () => {
    const firstItemID = "10001";
    const firstItemUnitPrice = "Rs. 50";

    const secondItemID = "10002";
    const secondItemName = "Milky Bread";
    const secondItemUnitPrice = "Rs. 60";

    it("Goes to the Workspace page", () => {
        cy.visit("http://localhost:3000/PostSys#/workspace");
    });

    it("GrandTotal is 0 initially", () => {
        // grandtotal display
        cy.get(".rb-cost-text > .text-transition > .text-transition_inner > div").contains("0");
    });

    it(`Can input item ${firstItemID}`, () => {
        cy.get("#IdInput").click().type(`${firstItemID}{enter}`);
    });

    it(`Added item ${firstItemID}`, () => {
        cy.get('[style="opacity: 1; transform-origin: 50% 50% 0px;"] > .td-id').contains(
            firstItemID
        );
    });

    it(`Can input item ${secondItemID}`, () => {
        cy.get("#IdInput").click().type(`${secondItemID}{enter}`);
    });

    it(`Added item ${secondItemID}`, () => {
        cy.get('[style="opacity: 1; transform-origin: 50% 50% 0px;"] > .td-id').contains(
            secondItemID
        );
    });

    it("Changes grandTotal", () => {
        // grandtotal display
        cy.get(".rb-cost-text > .text-transition > .text-transition_inner > div").contains(
            "Rs. 110"
        );
    });

    // SORTING TESTS -----------------------------------------------------------------------------------------------------
    it("Sorts by itemID", () => {
        const toStrings = (cells$) => _.map(cells$, "textContent");

        cy.get(".th-id").click();
        cy.get("#table-to-xls").within(() => {
            cy.get(".td-id")
                .then(toStrings)
                .then((itemIds) => {
                    const sorted = _.sortBy(itemIds);

                    expect(itemIds, "ItemIds are sorted").to.deep.equal(sorted);
                });
        });
    });

    it("Sorts by item Name", () => {
        const toStrings = (cells$) => _.map(cells$, "textContent");

        cy.get(".th-name").click();
        cy.get("#table-to-xls").within(() => {
            cy.get(".td-name")
                .then(toStrings)
                .then((itemNames) => {
                    const sorted = _.sortBy(itemNames);

                    expect(itemNames, "itemNames are sorted").to.deep.equal(sorted);
                });
        });
    });

    it("Sorts by Unit Price", () => {
        const toStrings = (cells$) => _.map(cells$, "textContent");

        cy.get(".th-unitPrice").click();
        cy.get("#table-to-xls").within(() => {
            cy.get(".td-unitPrice")
                .then(toStrings)
                .then((unitPrices) => {
                    const sorted = _.sortBy(unitPrices);

                    expect(unitPrices, "Unit prices are sorted").to.deep.equal(sorted);
                });
        });
    });

    it("Sorts by Item Total Price", () => {
        const toStrings = (cells$) => _.map(cells$, "textContent");

        cy.get(".th-totalPrice").click();
        cy.get("#table-to-xls").within(() => {
            cy.get(".td-totalPrice")
                .then(toStrings)
                .then((totalPrices) => {
                    const sorted = _.sortBy(totalPrices);

                    expect(totalPrices, "Total prices are sorted").to.deep.equal(sorted);
                });
        });
    });
    // SORTING TESTS -----------------------------------------------------------------------------------------------------

    it("Adds item total price", () => {
        // add button
        cy.get(':nth-child(2) > .td-qty > [fill="currentColor"]').click();

        cy.wait(2000);

        // total price
        cy.get(".td-price.td-unitPrice").then(($unitPrice) => {
            console.log($unitPrice.text());
            let unitPrice = $unitPrice.text();
            unitPrice = +unitPrice.split("Rs. ")[1];

            cy.get(".td-price.td-totalPrice").contains("100");
        });
    });

    it("Payment input reacts properly", () => {
        cy.get(".rb-cost-text").then(($grandTotal) => {
            let grandTotalNumber = "";
            const grandTotal = $grandTotal.text();
            // removes the 'Rs. ' from grandTotal and converts it to an int
            grandTotalNumber = +grandTotal.split("Rs. ")[1];

            cy.get("#payment").click().type(grandTotalNumber);
        });

        cy.get(".default-btn").should("not.be.disabled");
    });
});
