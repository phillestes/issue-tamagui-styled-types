import { StatusBar } from 'expo-status-bar';
import { View, Text, styled } from '@tamagui/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// typescript errors if type casting omitted
// const Container = styled(View, {
//   flex: 1,
// });
const Container = styled(View, {
  flex: 1,
}) as typeof View;

const ContentContainer = styled(View, {
  flex: 1,
  flexDirection: 'row',
});

const DashboardContainer = styled(View, {
  flex: 1,
  padding: '$3',
  borderWidth: 1,
  borderColor: 'green',
});

const MobileContentContainer = styled(View, {
  padding: '$3',
  marginTop: '$2',
  borderWidth: 1,
  borderColor: 'red',
  $tablet: {
    display: 'none',
  },
});

const DesktopSidePanel = styled(View, {
  width: '$20',
  padding: '$3',
  borderWidth: 1,
  borderColor: 'blue',
  display: 'none',
  $tablet: {
    display: 'flex',
  },
});

export function Dashboard() {
  const insets = useSafeAreaInsets();

  return (
    <Container>
      {/* errors for children if no casting */}
      <ContentContainer paddingTop={insets.top}>
        <DashboardContainer>
          <Text>Main Content</Text>

          <MobileContentContainer>
            <Text>Mobile Only Content</Text>
          </MobileContentContainer>
        </DashboardContainer>

        <DesktopSidePanel>
          <Text>Desktop Side Panel</Text>
        </DesktopSidePanel>
      </ContentContainer>

      <StatusBar style="auto" />
    </Container>
  );
}
