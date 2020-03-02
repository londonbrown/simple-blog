import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import Post from "./Post";
import PostPreview from "./PostPreview";
import GlobalContext from "../contexts/GlobalContext";

const LOREM_JIBBERISH = "Lorem\\n ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \\ntempor incididunt ut labore et dolore magna aliqua. Sagittis nisl \\nrhoncus mattis rhoncus urna. Id aliquet risus feugiat in ante metus \\ndictum at. Sed egestas egestas fringilla phasellus faucibus scelerisque.\\n Facilisis volutpat est velit egestas dui. Augue mauris augue neque \\ngravida. Risus quis varius quam quisque id. Aliquam faucibus purus in \\nmassa tempor nec feugiat. Viverra suspendisse potenti nullam ac tortor \\nvitae purus faucibus ornare. Risus commodo viverra maecenas accumsan \\nlacus vel facilisis. Sed felis eget velit aliquet sagittis id \\nconsectetur purus ut.\\n\\n\\nCras pulvinar mattis nunc sed blandit libero volutpat sed. Amet \\nmattis vulputate enim nulla aliquet porttitor lacus luctus. Diam donec \\nadipiscing tristique risus nec feugiat in. Ut tristique et egestas quis \\nipsum suspendisse ultrices. Erat nam at lectus urna duis convallis. Non \\ncurabitur gravida arcu ac tortor dignissim. Sollicitudin aliquam \\nultrices sagittis orci a scelerisque purus semper. Quis enim lobortis \\nscelerisque fermentum dui faucibus. Posuere urna nec tincidunt praesent.\\n Faucibus purus in massa tempor nec feugiat nisl pretium. Dolor sit amet\\n consectetur adipiscing elit pellentesque habitant morbi. Facilisi etiam\\n dignissim diam quis enim. Elit sed vulputate mi sit amet mauris.\\n\\n\\nVitae nunc sed velit dignissim sodales. Sagittis eu volutpat odio \\nfacilisis. Amet purus gravida quis blandit turpis cursus in hac \\nhabitasse. Risus feugiat in ante metus dictum at tempor. Amet aliquam id\\n diam maecenas. Vulputate dignissim suspendisse in est ante in nibh. \\nTristique nulla aliquet enim tortor at auctor urna nunc id. Bibendum \\nenim facilisis gravida neque convallis a. Quisque egestas diam in arcu. \\nDiam ut venenatis tellus in metus vulputate eu scelerisque felis. A erat\\n nam at lectus urna duis convallis convallis tellus. Nisi est sit amet \\nfacilisis magna etiam.\\n\\n\\nGravida neque convallis a cras semper auctor neque vitae tempus. \\nLacus vel facilisis volutpat est velit egestas dui id. Ante in nibh \\nmauris cursus mattis molestie a iaculis at. Tellus id interdum velit \\nlaoreet id donec ultrices tincidunt. Vestibulum sed arcu non odio. \\nFacilisi cras fermentum odio eu. Enim tortor at auctor urna. Odio ut \\nenim blandit volutpat. Lacus laoreet non curabitur gravida arcu ac \\ntortor. Erat velit scelerisque in dictum non consectetur a erat nam. Sed\\n ullamcorper morbi tincidunt ornare massa eget egestas purus.\\n\\n\\nRisus pretium quam vulputate dignissim suspendisse in est ante in. \\nAdipiscing at in tellus integer feugiat scelerisque varius morbi. \\nIaculis eu non diam phasellus vestibulum lorem sed. Lorem dolor sed \\nviverra ipsum nunc. Fames ac turpis egestas integer eget aliquet nibh \\npraesent. Quis risus sed vulputate odio ut enim. Nulla at volutpat diam \\nut venenatis tellus. Orci ac auctor augue mauris augue. Sed id semper \\nrisus in hendrerit gravida. Massa enim nec dui nunc mattis enim ut \\ntellus elementum. Lobortis scelerisque fermentum dui faucibus in ornare \\nquam viverra orci. Massa ultricies mi quis hendrerit dolor magna eget. \\nFames ac turpis egestas maecenas pharetra convallis posuere morbi leo. \\nMassa ultricies mi quis hendrerit dolor magna eget est. Nullam non nisi \\nest sit amet facilisis magna. Massa eget egestas purus viverra accumsan \\nin nisl nisi. Facilisi etiam dignissim diam quis enim lobortis \\nscelerisque fermentum dui.\\n\\n\\nA cras semper auctor neque vitae tempus quam pellentesque. Id \\nconsectetur purus ut faucibus pulvinar elementum integer enim. Urna et \\npharetra pharetra massa massa ultricies mi quis hendrerit. Tincidunt \\neget nullam non nisi est sit amet facilisis magna. Neque volutpat ac \\ntincidunt vitae semper quis lectus nulla. Laoreet non curabitur gravida \\narcu ac tortor dignissim convallis. In fermentum et sollicitudin ac orci\\n phasellus egestas tellus rutrum. Scelerisque eu ultrices vitae auctor. A\\n scelerisque purus semper eget duis at tellus. Volutpat diam ut \\nvenenatis tellus in metus. Viverra mauris in aliquam sem fringilla ut \\nmorbi tincidunt augue. Non quam lacus suspendisse faucibus interdum \\nposuere lorem ipsum dolor. Condimentum vitae sapien pellentesque \\nhabitant morbi tristique.\\n\\n\\nLobortis scelerisque fermentum dui faucibus in ornare quam viverra. \\nUltricies lacus sed turpis tincidunt id aliquet risus feugiat. \\nPellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.\\n Blandit cursus risus at ultrices mi. Velit egestas dui id ornare arcu \\nodio ut. Justo nec ultrices dui sapien eget mi. Consequat semper viverra\\n nam libero. Urna neque viverra justo nec ultrices dui sapien eget. \\nMassa ultricies mi quis hendrerit dolor. Vitae et leo duis ut diam quam \\nnulla. Mollis nunc sed id semper risus in hendrerit gravida. Dictum \\nfusce ut placerat orci nulla pellentesque dignissim enim. Nisi lacus sed\\n viverra tellus in. Eget mi proin sed libero enim sed. Eget nulla \\nfacilisi etiam dignissim diam quis enim lobortis.\\n\\n\\nPellentesque elit ullamcorper dignissim cras. Fermentum et \\nsollicitudin ac orci phasellus egestas tellus rutrum tellus. Justo donec\\n enim diam vulputate ut pharetra sit. Sit amet nisl purus in mollis \\nnunc. Suspendisse ultrices gravida dictum fusce ut. Euismod nisi porta \\nlorem mollis. Tristique senectus et netus et malesuada fames. Cum sociis\\n natoque penatibus et magnis dis parturient montes. Elementum sagittis \\nvitae et leo duis ut diam. Sollicitudin tempor id eu nisl nunc mi ipsum \\nfaucibus. Rhoncus dolor purus non enim praesent elementum facilisis. \\nNisl tincidunt eget nullam non nisi est. Imperdiet massa tincidunt nunc \\npulvinar sapien et ligula ullamcorper malesuada. Risus commodo viverra \\nmaecenas accumsan lacus. Vel turpis nunc eget lorem. Cras sed felis eget\\n velit aliquet sagittis. Ornare suspendisse sed nisi lacus sed viverra \\ntellus in. Elit ut aliquam purus sit. Ante metus dictum at tempor. Proin\\n fermentum leo vel orci porta non.\\n\\n\\nPretium aenean pharetra magna ac placerat vestibulum lectus mauris. \\nUltricies mi eget mauris pharetra et ultrices neque. Turpis egestas \\nmaecenas pharetra convallis posuere morbi leo. Pharetra et ultrices \\nneque ornare aenean euismod elementum nisi quis. Penatibus et magnis dis\\n parturient montes nascetur ridiculus mus mauris. Commodo sed egestas \\negestas fringilla phasellus faucibus scelerisque. Faucibus nisl \\ntincidunt eget nullam non nisi. Pellentesque habitant morbi tristique \\nsenectus et. Nulla aliquet enim tortor at auctor urna nunc id. Cras \\nadipiscing enim eu turpis egestas. Pellentesque pulvinar pellentesque \\nhabitant morbi tristique senectus et netus. Pellentesque id nibh tortor \\nid aliquet. Condimentum vitae sapien pellentesque habitant. Id donec \\nultrices tincidunt arcu non sodales. Dictumst quisque sagittis purus sit\\n amet volutpat consequat mauris.\\n\\n\\nElementum facilisis leo vel fringilla est ullamcorper eget nulla. \\nRisus quis varius quam quisque id diam vel quam elementum. Viverra \\naliquet eget sit amet. Malesuada proin libero nunc consequat interdum. \\nUltrices tincidunt arcu non sodales neque sodales. Nam aliquam sem et \\ntortor consequat id porta nibh venenatis. Aliquam vestibulum morbi \\nblandit cursus risus at ultrices. Urna cursus eget nunc scelerisque. \\nElementum pulvinar etiam non quam lacus suspendisse faucibus. Laoreet \\nnon curabitur gravida arcu ac tortor. Hendrerit gravida rutrum quisque \\nnon. Gravida rutrum quisque non tellus orci ac auctor augue. Nunc \\nlobortis mattis aliquam faucibus purus in massa. Ante in nibh mauris \\ncursus mattis molestie a iaculis at. Netus et malesuada fames ac. \\nParturient montes nascetur ridiculus mus. At quis risus sed vulputate \\nodio ut. Libero nunc consequat interdum varius sit amet mattis vulputate\\n enim.".replace(
  /\\n/g,
  " "
);

type HomeState = {
  posts: Array<any>;
  author: any;
  latestPost: any;
};

type HomeProps = {
  className?: string;
};

export default class Home extends Component<HomeProps, HomeState> {
  static contextType = GlobalContext;
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      posts: [],
      author: null,
      latestPost: null
    };
  }

  async componentDidMount(): Promise<void> {
    if (this.context.client) {
      try {
        const userRequestResponse = await this.context.client.getUser(
          "fcb0cf58-36e0-4d4c-8aa2-f399503eff0b"
        );
        const postsByUserRequestResponse: Array<any> = await this.context.client.getPostsByUser(
          userRequestResponse.id
        );

        let latestPost = null;
        if (postsByUserRequestResponse.length > 0) {
          const latestPostId = postsByUserRequestResponse[0].id;
          latestPost = await this.context.client.getPost(latestPostId);
        }
        const postsWithAuthor = postsByUserRequestResponse.map(post => {
          post.username = userRequestResponse.username;
          return post;
        });
        this.setState({
          author: userRequestResponse,
          posts: postsByUserRequestResponse,
          latestPost: latestPost
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  render() {
    const latestPost = this.state.posts.length > 0 && (
      <>
        <hr className="my-2" />
        <p>View latest post</p>
        <p className="lead">
          <Button color="primary" href={this.state.posts[0].link}>
            {this.state.posts[0].title}
          </Button>
        </p>
      </>
    );
    return (
      <div className={this.props.className}>
        <Jumbotron>
          <h1 className="display-4">lahiyam</h1>
          <p className="lead display-3">Nonsensical whisperings</p>
          {latestPost}
        </Jumbotron>
        <Row className="mt-0">
          <Col className="mt-0">
            {this.state.latestPost && (
              <Post
                id={this.state.latestPost.id}
                title={this.state.latestPost.title}
                createdAt={this.state.latestPost.createdAt}
                content={this.state.latestPost.content}
                username={this.state.author.username}
              />
            )}
            {this.state.posts.map(post => {
              if (
                !this.state.latestPost ||
                post.id !== this.state.latestPost.id
              ) {
                return (
                  <PostPreview
                    id={post.id}
                    title={post.title}
                    createdAt={post.createdAt}
                    username={post.username}
                  />
                );
              }
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
