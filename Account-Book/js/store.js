/**
 * dateList {
    date: new Date("2000-01-10").toLocaleDateString(),
    id: "2",
  }[]
 * detailList {
    2: {
       id: Date.now() + 1000,
       createAt: new Date(),
       description: "삼겹살",
       category: "식사",
       amount: 20000,
       fundsAtTheTime: 9978000,
     }[]
  }
 */
export const store = {
  currentFunds: 0,

  isFirstEdit: true,
  todayId: 1,

  dateList: [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
    },
  ],
  detailList: {},
};

export function updateStorage() {
  sessionStorage.setItem("store", JSON.stringify(store));
}

export function initStore() {
  let storage = sessionStorage.getItem("store");

  // 스토리지가 없으면 현재 store 상태로 최초 초기화
  if (!storage) {
    updateStorage();
    storage = sessionStorage.getItem("store");
  }

  try {
    const parsed = JSON.parse(storage);

    // 기존 스토리지가 예상과 다르게 비어있거나 null인 경우 대비
    if (!parsed || typeof parsed !== "object") {
      updateStorage();
      return;
    }

    const {
      dateList = store.dateList,
      detailList = store.detailList,
      todayId = store.todayId,
      currentFunds = store.currentFunds,
      isFirstEdit = store.isFirstEdit,
    } = parsed;

    store.currentFunds = currentFunds;
    store.isFirstEdit = isFirstEdit;
    store.dateList = Array.isArray(dateList) ? dateList : store.dateList;
    store.detailList =
      detailList && typeof detailList === "object" ? detailList : {};
    store.todayId = typeof todayId === "number" ? todayId : store.todayId;
  } catch (error) {
    // 손상된 스토리지는 초기화
    console.error(error);
    updateStorage();
  }
}

export function addNewHistory(newHistory) {
  try {
    const todayId = store.todayId;

    if (store.detailList[todayId]) {
      store.detailList[todayId].push(newHistory);
    } else {
      store.detailList[todayId] = [newHistory];
    }
    store.currentFunds -= newHistory.amount;

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

export function removeHistory(dateId, itemId) {
  try {
    store.detailList[dateId] = store.detailList[dateId].filter(
      ({ id, amount }) => {
        if (id === Number(itemId)) {
          store.currentFunds += amount;
        }
        return id !== Number(itemId);
      },
    );

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}
