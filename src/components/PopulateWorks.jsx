const PopulateWorks = () => {
  const data = [
    {
      name: "粉色的上衣",
      engName: "A Pink Shirt",
      fileName: "work1",
      imagePath: require.context("../../public/work1", true),
      description:
        "王文图候那水二军术处动, 示那素且严际那受种层和, 积持村取力手装争投。 列总上方地联处段被难, 斗包二没提压片今, 拉提丽即取自呜数。 界学复深候原定得支进, 观商派府指管之特即, 过成C进此茎她P。 命影毛低被八取风果色之, 今层能入外元革保断老五, 局那8角好料深为或。 ",
    },
    {
      name: "像翅膀一样",
      engName: "Angle's Wings",
      fileName: "work2",
      imagePath: require.context("../../public/work2", true),
      description:
        "王文图候那水二军术处动, 示那素且严际那受种层和, 积持村取力手装争投。 列总上方地联处段被难, 斗包二没提压片今, 拉提丽即取自呜数。 界学复深候原定得支进, 观商派府指管之特即, 过成C进此茎她P。 命影毛低被八取风果色之, 今层能入外元革保断老五, 局那8角好料深为或。 ",
    },
    {
      name: "牛仔泡泡裙",
      engName: "Jean Dress",
      fileName: "work3",
      imagePath: require.context("../../public/work3", true),
      description:
        "王文图候那水二军术处动, 示那素且严际那受种层和, 积持村取力手装争投。 列总上方地联处段被难, 斗包二没提压片今, 拉提丽即取自呜数。 界学复深候原定得支进, 观商派府指管之特即, 过成C进此茎她P。 命影毛低被八取风果色之, 今层能入外元革保断老五, 局那8角好料深为或。 ",
    },
    {
      name: "兔子面具",
      engName: "Rabbit Mask",
      fileName: "work4",
      imagePath: require.context("../../public/work4", true),
      description:
        "王文图候那水二军术处动, 示那素且严际那受种层和, 积持村取力手装争投。 列总上方地联处段被难, 斗包二没提压片今, 拉提丽即取自呜数。 界学复深候原定得支进, 观商派府指管之特即, 过成C进此茎她P。 命影毛低被八取风果色之, 今层能入外元革保断老五, 局那8角好料深为或。 ",
    },
  ];
  let imageList = [];
  data.map((work) => {
    const images = work.imagePath;
    const files = images.keys().map((image) => images(image));
    imageList.push({ ...work, images: files });
  });
  console.log(imageList);
  return imageList;
};
export default PopulateWorks;
