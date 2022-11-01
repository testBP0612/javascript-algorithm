const isPaid = true;
const isDelivered = false;
const isRecpipted = false;
const isFinished = false;
const isAppropriated = false;
const isReturned = false;
const isRefunded = false;
const isBuyerCancelled = false;
const isSellerCancelled = false;
const isSystemCancelled = false;
const isFrozened = false;

const orderState = [
  isPaid,
  isDelivered,
  isRecpipted,
  isFinished,
  isAppropriated,
  isReturned,
  isRefunded,
  isBuyerCancelled,
  isSellerCancelled,
  isSystemCancelled,
  isFrozened,
];

const state = orderState.map((s => s ? 1 : 0));

console.log(orderState.map((s => s ? 1 : 0)).toString().replace(/,/g, ''));