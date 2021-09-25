import { CourierClient } from "@trycourier/courier";
const courier = CourierClient({ authorizationToken: "pk_prod_CSFVSPPV3PMCB0PSEPYTZT55A4WK" });
const { messageId } = await courier.send({
  eventId: "courier-quickstart",
  recipientId: "Github_59897679",
  data: {
    favoriteAdjective: "awesomeness"
  },
});