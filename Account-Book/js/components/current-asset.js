import { store, updateStorage } from "../store";
import { toHidden, toShow } from "../util";

const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $addItemButton = document.querySelector(".add-item-button");

export function initCurrentAsset() {
  renderCurrentAsset();
  addCurrentAssetEventListener();
}

function addCurrentAssetEventListener() {
  $currentAssetValue.addEventListener("click", function (event) {
    toHidden(event.target);
    toShow($currentAssetInput);
    toShow($currentAssetButton);

    $currentAssetInput.focus();
  });

  $currentAssetButton.addEventListener("click", function (event) {
    toHidden(event.target);
    toHidden($currentAssetInput);
    toShow($currentAssetValue);
    toShow($addItemButton);

    store.currentFunds = Number($currentAssetInput.value);
    renderCurrentAsset();

    store.isFirstEdit = false;

    updateStorage();
  });
}

export function renderCurrentAsset() {
  // 옵셔널 체이닝 사용 (if문, 삼항연산자 사용 가능)
  $currentAssetValue.textContent = store.currentFunds?.toLocaleString() ?? "-";
  $currentAssetInput.value = store.currentFunds;
}
