import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Login, Signup, VerifyEmail, ResetPassword } from './pages/Auth'
import { Checkout, CheckoutComplete, CheckoutFailed } from './pages/Checkout'
import { AccountLayout, MyProducts, Subscription, CancelSubscription, Settings } from './pages/Account'
import Download from './pages/Download'
import Support from './pages/Support'
import Updates from './pages/Updates'
import { Terms, Privacy, RefundPolicy, License } from './pages/Policy'

// 페이지 이동 시 맨 위로, /#id 링크는 해당 섹션으로
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/complete" element={<CheckoutComplete />} />
          <Route path="checkout/failed" element={<CheckoutFailed />} />
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<MyProducts />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="account/subscription/cancel" element={<CancelSubscription />} />
          <Route path="download" element={<Download />} />
          <Route path="support" element={<Support />} />
          <Route path="updates" element={<Updates />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="license" element={<License />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
