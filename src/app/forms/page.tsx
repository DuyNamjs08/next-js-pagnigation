"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const test = z
  .string({
    required_error: "hello",
    invalid_type_error: "hello1",
  })
  .trim();
const SupplierValueSchemas = {
  id: test.describe("1"),
  cifBranchNumber: test.describe("1"),
  cif: test.describe("1"),
  inflowSource: test.describe("1"),
  receptionDate: test.describe("1"),
  corporateName: test.describe("1"),
  corporateNameKana: test.describe("1"),
  zipCode: test.describe("1"),
  address: test.describe("1"),
  addressKana: test.describe("1"),
  representativesName: test.describe("1"),
  representativesNameKana: test.describe("1"),
  representativesBirthDate: test.describe("1"),
  phoneNumber: test.describe("1"),
  businessContent: test.describe("1"),
  createdAt: test.describe("1"),
  updatedAt: test.describe("1"),
};
export const ShopValueSchemas = {
  id: test.describe("1"),
  walletId: test.describe("1"),
  did: test.describe("1"),
  supplierId: test.describe("1"),
  name: test.describe("name"),
  nameKana: test.describe("nameKana"),
  zipCode: test.describe("1"),
  address: test.describe("1"),
  addressKana: test.describe("1"),
  deliveryAddress: test.describe("1"),
  phoneNumber: test.describe("1"),
  typeOfIndustry: test.describe("1"),
  mail: test.describe("mail"),
  bankAccountId: test.describe("1"),
  bankName: test.describe("1"),
  bankCode: test.describe("1"),
  branchName: test.describe("1"),
  branchCode: test.describe("1"),
  accountType: test.describe("1"),
  accountId: test.describe("1"),
  accountHolder: test.describe("1"),
  accountHolderKana: test.describe("1"),
  isStopped: test.describe("1"),
  isStoppedTransactionIn: test.describe("1"),
  isStoppedTransactionOut: test.describe("1"),
  stoppedAt: test.optional().describe("1"),
  isDeleted: test.describe("1"),
  deletedAt: test.optional().describe("1"),
  isActivated: test.describe("1"),
  activatedAt: test.optional().describe("1"),
  createdAt: test.describe("1"),
  updatedAt: test.describe("1"),
};
const shopCreateSchema = z.object({
  mail: ShopValueSchemas.mail,
  name: ShopValueSchemas.name,
  nameKana: ShopValueSchemas.nameKana,
  zipCode: ShopValueSchemas.zipCode,
  address: ShopValueSchemas.address,
  addressKana: ShopValueSchemas.addressKana,
  deliveryAddress: ShopValueSchemas.deliveryAddress,
  phoneNumber: ShopValueSchemas.phoneNumber,
  typeOfIndustry: ShopValueSchemas.typeOfIndustry,
  bankName: ShopValueSchemas.bankName,
  bankCode: ShopValueSchemas.bankCode,
  branchName: ShopValueSchemas.branchName,
  branchCode: ShopValueSchemas.branchCode,
  accountType: ShopValueSchemas.accountType,
  accountId: ShopValueSchemas.accountId,
  accountHolder: ShopValueSchemas.accountHolder,
  accountHolderKana: ShopValueSchemas.accountHolderKana,

  supplier: z.object({
    cif: SupplierValueSchemas.cif,
    cifBranchNumber: SupplierValueSchemas.cifBranchNumber,

    inflowSource: SupplierValueSchemas.inflowSource,
    receptionDate: SupplierValueSchemas.receptionDate,

    corporateName: SupplierValueSchemas.corporateName,
    corporateNameKana: SupplierValueSchemas.corporateNameKana,

    zipCode: SupplierValueSchemas.zipCode,
    address: SupplierValueSchemas.address,
    addressKana: SupplierValueSchemas.addressKana,

    representativesName: SupplierValueSchemas.representativesName,
    representativesNameKana: SupplierValueSchemas.representativesNameKana,
    representativesBirthDate: SupplierValueSchemas.representativesBirthDate,

    phoneNumber: SupplierValueSchemas.phoneNumber,
    businessContent: SupplierValueSchemas.businessContent,
  }),
  temporaryPassword: test.describe("1"),
});

type SignUpSchemaType = z.infer<typeof shopCreateSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<SignUpSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(shopCreateSchema),
  });
  console.log("error", errors);
  useEffect(() => {
    trigger([
      "mail",
      "name",
      "nameKana",
      "address",
      "addressKana",
      "deliveryAddress",
      "phoneNumber",
      "typeOfIndustry",
      "bankName",
      "bankCode",
      "branchName",
      "branchCode",
      "accountType",
      "accountId",
      "accountHolder",
      "accountHolderKana",
      "supplier.cif",
      "supplier.cifBranchNumber",
      "supplier.inflowSource",
      "supplier.receptionDate",
      "supplier.corporateName",
      "supplier.corporateNameKana",
      "supplier.zipCode",
      "supplier.address",
      "supplier.addressKana",
      "supplier.representativesName",
      "supplier.representativesNameKana",
      "supplier.representativesBirthDate",
      "supplier.businessContent",
      "temporaryPassword",
    ]);
  }, []);
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Tên đăng nhập</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("mail")} />
        {errors.mail && <p>{errors.mail.message}</p>}
      </div>
      <div>
        <label>Mật khẩu</label>
        <input type="text" {...register("nameKana")} />
        {errors.nameKana && <p>{errors.nameKana.message}</p>}
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Form;
