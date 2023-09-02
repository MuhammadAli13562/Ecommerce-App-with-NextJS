import { connectToDB } from "utils/db/database";
import { NextResponse } from "next/server";
import { cart_model, itemType, item_model } from "utils/db/schema";
import { headers } from "next/headers";

export async function GET(request: Request) {
  console.log("request recived at get : ", request);
  const headerList = headers();
  const userID = headerList.get("userid");
  console.log(userID);

  if (!userID) {
    return NextResponse.json(
      {
        message: "Incomplete info in body",
      },
      {
        status: 401,
      }
    );
  }
  try {
    await connectToDB();
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error Connecting to DB",
      },
      {
        status: 501,
      }
    );
  }
  try {
    const cart_result = await cart_model.find({ userID });

    return NextResponse.json({
      cart: cart_result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error in DB : ${error}`,
      },
      {
        status: 404,
      }
    );
  }
}

export async function POST(request: Request) {
  const requestbody = await request.json();

  console.log("req body:", requestbody);

  const { userID, itemID, itemQuantity } = requestbody;
  if (!userID || !itemID || !itemQuantity) {
    return NextResponse.json(
      {
        message: "Incomplete info in body",
      },
      {
        status: 404,
      }
    );
  }

  try {
    await connectToDB();
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error Connecting to DB",
      },
      {
        status: 501,
      }
    );
  }
  /// ADD USER TO USER CART IF NOT ALREADY PRESENT

  const _exist = await cart_model.findOne({ userID });

  if (!_exist) {
    const _new_user = new cart_model({
      userID,
      cartItems: [],
    });

    await _new_user.save();
  }

  ////
  const inventory_result = await item_model.findOne(
    { itemID },
    { _id: 0, itemQuantity: 0 }
  );
  console.log("inv res :", inventory_result);

  console.log("control reached here 3");

  if (inventory_result) {
    try {
      await cart_model.findOne({ userID }).then(async (doc) => {
        const cart_Array = doc?.cartItems;
        const _item = cart_Array?.find((e: itemType) => e.itemID === itemID);

        if (_item) {
          _item.itemQuantity += itemQuantity;
          await doc?.save();
          return;
        }
        console.log("control");

        cart_Array?.push({
          itemID: inventory_result.itemID,
          itemName: inventory_result.itemName,
          itemQuantity,
          itemImage: inventory_result.itemImage,
        });
        console.log("cart arr : ", cart_Array);

        await doc?.save();
      });

      const result = await cart_model.find({ userID });

      return NextResponse.json(
        {
          Updated_Usercart: result,
        },
        {
          status: 200,
        }
      );
    } catch (error: any) {
      return NextResponse.json(
        {
          message: error.message ?? error,
        },
        {
          status: 404,
        }
      );
    }
  } else {
    return NextResponse.json(
      {
        message: "Item not found",
      },
      {
        status: 404,
      }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { itemID: String } }
) {
  const requestbody = await request.json();
  const itemID = params.itemID[0];
  const { userID, itemQuantity } = requestbody;

  if (!userID || !itemQuantity) {
    return NextResponse.json(
      {
        message: "Incomplete info in body",
      },
      {
        status: 404,
      }
    );
  }
  try {
    await connectToDB();
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error Connecting to DB",
      },
      {
        status: 501,
      }
    );
  }
  const inventory_result = await item_model.findOne(
    { itemID },
    { _id: 0, itemQuantity: 0 }
  );
  console.log(inventory_result);

  if (inventory_result) {
    try {
      await cart_model.findOne({ userID }).then(async (doc) => {
        let cart_Array = doc?.cartItems;
        const _item = cart_Array?.find((e: itemType) => e.itemID === itemID);
        console.log(cart_Array);
        console.log(itemID);

        if (_item) {
          _item.itemQuantity = itemQuantity;
          await doc?.save();
          return;
        }
      });

      const result = await cart_model.find({ userID });

      return NextResponse.json(
        {
          Updated_Usercart: result,
        },
        {
          status: 200,
        }
      );
    } catch (error: any) {
      return NextResponse.json({
        message: error.message ?? error,
      });
    }
  } else {
    return NextResponse.json(
      {
        message: "Item not found",
      },
      {
        status: 404,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { itemID: Array<String> } }
) {
  const requestbody = await request.json();
  console.log("reqbody : ", requestbody);

  const { userID } = requestbody;
  console.log("params : ", params);

  const itemID = params.itemID[0];

  try {
    await connectToDB();
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error Connecting to DB",
      },
      {
        status: 501,
      }
    );
  }

  try {
    await cart_model.findOne({ userID }).then(async (doc) => {
      doc?.cartItems.pull({ itemID });
      await doc?.save();
    });
    return NextResponse.json(
      {
        Updated_Cart: await cart_model.findOne({ userID }),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    NextResponse.json(
      {
        message: "Error Occured while deleting",
      },
      {
        status: 500,
      }
    );
  }
}
