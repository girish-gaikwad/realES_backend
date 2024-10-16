
import { create } from "zustand";
import axios from "axios";

const usePopupStore = create((set, get) => ({

//popup options
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),



  // Card options and selected option
  selectedOption: "",  // Default value or dynamic value
  selectedType: "",  // Default value or dynamic value
  selectedCard: null,  //selected card id
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedOption: (option) => set({ selectedOption: option }),
  setSelectedCard: (card) => set({ selectedCard: card }),

  // user details
  userDetails: [],
  fetchUserDetails: async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user-details/1");
      set({ userDetails: response.data });
    } catch (error) {
      console.log(error.message + " user");
    }
  },

  // Cards rendering
  cards: [],
  fetchCards: async () => {
    console.log("fetching cards");
    
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user-estates/1");
      set({ cards: response.data });
    } catch (error) {
      console.log(error.message + " cards");
    }
  },

  // Utilities rendering
  SelectedamenitiesList: [],
  SelectedutilitiesList: [],

  setAmenitiesDiscount: (estateId, amenityId, discount, discountType) =>
    set((state) => ({
      SelectedamenitiesList: state.SelectedamenitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              amenities: item.amenities.map((amenity) =>
                amenity.id === amenityId
                  ? { ...amenity, discount, discountType }
                  : amenity
              ),
            }
          : item
      ),
    })),

    deleteAmenities: (estateId, amenityId) =>
    set((state) => ({
      SelectedamenitiesList: state.SelectedamenitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              amenities: item.amenities.filter((amenity) => amenity.id !== amenityId),
            }
          : item
      ),
    })),
    deleteUtilities: (estateId, utilityId) =>
    set((state) => ({
      SelectedutilitiesList: state.SelectedutilitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              utilities: item.utilities.filter((utility) => utility.id !== utilityId),
            }
          : item
      ),
    })),



  // card discount
  discount_on_cards: [],

  creatediscountarray: () => {
    console.log('creatediscountarray');
    setTimeout(() => {
      const cards = get().cards;
      const updatedCards = cards.map(card => {
        const { estate, ...rest } = card;
        return { ...rest, discounttype: "", discount: 0 };
      });
      set({ discount_on_cards: updatedCards });
      console.log(get().discount_on_cards);
    }, 2000);
  },

  updateDiscount: (index, discount) => set((state) => {
    const updatedCards = [...state.discount_on_cards];
    updatedCards[index].discount = discount;
    return { discount_on_cards: updatedCards };
  }),

  updateDiscountType: (index, discounttype) => set((state) => {
    const updatedCards = [...state.discount_on_cards];
    updatedCards[index].discounttype = discounttype;
    return { discount_on_cards: updatedCards };
  }),










  // Card actions
deleteCard: async (cardId, userId, estateId) => {
  const { discount_on_cards, cards } = get();

  // Update cards and discount_on_cards in the store state
  set({
    cards: cards.filter((card) => card.id !== cardId),
    discount_on_cards: discount_on_cards.filter((card) => card.id !== cardId),
  });

  console.log("discount_on_cards", get().discount_on_cards);

  // Attempt to soft-delete the card
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/user-estates/soft-delete/${userId}/${estateId}`
    );
    console.log(response);
    console.log("Card deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
},



  // isolated estae detail
  individualEstate: null,
  setIndividualEstate: () => {
    const selectedCard = get().selectedCard;
    const estate = get().cards.find((card) => card.id === selectedCard);
    set({ individualEstate: estate });
  },

 






}));

export default usePopupStore;
